# -*- coding: utf-8 -*-
"""
Created on Sat Jun  6 12:40:09 2020

@author: steve
"""



import pandas as pd
import os
import numpy as np
import json
from scipy import stats
from sklearn.decomposition import PCA
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import euclidean_distances
from sklearn.linear_model import LinearRegression
class Searcherdf:
    def __init__(self, indexPath):
        # store our index path
        self.indexPath = indexPath
    def search(self, queryImage, limit = 20,):
        results = {}
        
        
        
                
        """############################################## Local Feature Descriptors F1  #####################"""
        ######################################## Begin put indexed file to df #############################
        data_features_F1 = pd.read_csv('outputFeature.csv', header=None)
        data_features_F1 = data_features_F1.sort_values(0)       
        data_feature_vector_F1 = data_features_F1.drop(columns=[0])
        ####################################### End put indexed file to df ##############################     
        ######################################## put query feature to df #############################
        query_feature_F1 = data_features_F1.loc[(data_features_F1[0]) == os.path.basename(queryImage)]
        query_feature_vector_F1 = query_feature_F1.drop(columns=[0])
        
        #print(query_feature_vector_F1.values)
        ########################################end put query feature to df #############################
        # Finding out the number of dimensions that keeps 95% of the variance of the original images
        pca_dims = PCA()
        pca_dims.fit(data_feature_vector_F1)
        cumsum = np.cumsum(pca_dims.explained_variance_ratio_)
        d = np.argmax(cumsum >= 0.95) + 1

        # Applying PCA on data feature vector
        pca = PCA(n_components=d)
        data_feature_vector_F1 = pca.fit_transform(data_feature_vector_F1)

        # Applying same PCA rule to query feature vector
        query_feature_vector_F1 = pca.transform(query_feature_vector_F1)

        # cosine similarity between query image and complete dataset
        cos_sim = euclidean_distances(query_feature_vector_F1, data_feature_vector_F1).flatten()
        #znormF1 = stats.zscore(cos_sim)
        maxval_F1 = cos_sim.max()
        # Create cosine similarity values dataframe
        #sim_F1 = pd.DataFrame(znormF1, columns=['simval'])
        sim_F1 = pd.DataFrame(cos_sim, columns=['simval_F1']).div(maxval_F1)       
        # Add cosine similarity as lasy column in data feature dataframe as ground truth
        """############################################## Local Feature Descriptors F1 #####################"""
        
        
        """############################################## Foreground and Background F2 -SEGMENTATION #####################"""
        ######################################## Begin put indexed file to df #############################
        data_features_F2 = pd.read_csv('index_segmentation.csv', header=None)
        data_feature_vector_F2 = data_features_F2.drop(columns=[0])
        ####################################### End put indexed file to df ##############################
        
        ######################################## put query feature to df #############################
        #query_feature_vector = pd.DataFrame(queryFeatures)
        #query_feature_vector = query_feature_vector.transpose() 
        query_feature_F2 = data_features_F2.loc[data_features_F2[0] == os.path.basename(queryImage)]
        query_feature_vector_F2 = query_feature_F2.drop(columns=[0])
        ########################################end put query feature to df #############################
        ######################################## begin caluclate distance #############################
        dtexture = self.chi2_distance(data_feature_vector_F2.iloc[:,0:26],query_feature_vector_F2.iloc[:,0:26])
        dshape = self.chi2_distance(data_feature_vector_F2.iloc[:,26:51],query_feature_vector_F2.iloc[:,26:51])
        dcolor = self.chi2_distance(data_feature_vector_F2.iloc[:,51:],query_feature_vector_F2.iloc[:,51:])   
        ######################################## end caluclate distance #############################
        ######################################## Begin z-score Normalization #############################
        ztexture = stats.zscore(dtexture)
        zshape = stats.zscore(dshape)
        zcolor = stats.zscore(dcolor)
        distval_F2 = 2*ztexture + zshape + zcolor
        maxval_F2 = distval_F2.max()
        sim_F2 =  pd.DataFrame(distval_F2, columns=['simval_F2']).div(maxval_F2)
        ######################################## End z-score Normalization #############################       
        """############################################## Foreground and Background F2 -SEGMENTATION #####################"""
        
        
        """############################################## HLD F3 #####################"""
        ######################################## Begin put indexed file to df #############################
        data_features_F3 = pd.read_csv('index1_vgg16.csv', header=None)
        data_feature_vector_F3 = data_features_F3.drop(columns=[0])
        ####################################### End put indexed file to df ##############################
        
        ######################################## put query feature to df #############################
        query_feature_F3 = data_features_F3.loc[data_features_F3[0] == os.path.basename(queryImage)]
        query_feature_vector_F3 = query_feature_F3.drop(columns=[0])
        ########################################end put query feature to df #############################
        dist_F3 = euclidean_distances(data_feature_vector_F3, query_feature_vector_F3)       
        maxval = dist_F3.max()
        sim_F3 =  pd.DataFrame(dist_F3, columns=['simval_F3']).div(maxval)        
        """############################################## HLD F3 #####################"""     
                               
        #####################################################  cmombine FV ##############################################################
       
        #simvalue = reg.coef_[0]*sim_F1.values + reg.coef_[1]*sim_F2.values +  reg.coef_[2]*sim_F3.values + reg.intercept_
        simvalue =sim_F1.values +sim_F2.values + sim_F3.values
        sim_F1F2F3 = pd.DataFrame(simvalue, columns=['simval'])
        dataset_result = pd.concat([data_features_F3[0], sim_F1F2F3,sim_F1,sim_F2,sim_F3], axis=1)
        sort_result_F4 = dataset_result.sort_values(by='simval', ascending=True).head(12)   
        #####################################################  cmombine FV ##############################################################
        
        
              
        # converting result to json format
        json_array = []
        for i in sort_result_F4.index:
            results[os.path.basename(sort_result_F4[0][i])] = os.path.basename(str(sort_result_F4['simval'][i]))
            x = {
                    "name": os.path.basename(sort_result_F4[0][i]),
                    #"score": str(sort_result_F4['simval_F1'][i])+"," + str(sort_result_F4['simval_F2'][i])+"," + str(sort_result_F4['simval_F3'][i]),
                    "score1": str(sort_result_F4['simval_F1'][i]),
                    "score2": str(sort_result_F4['simval_F2'][i]),
                    "score3": str(sort_result_F4['simval_F3'][i]),
                    #"weights":str(reg.coef_[0])+","+str(reg.coef_[1])+","+str(reg.coef_[2])
                    # "weight1": str(reg.coef_[0]),
                    # "weight2": str(reg.coef_[1]),
                    # "weight3": str(reg.coef_[2]),
                    }
            json_array.append(x)
            # convert into JSON:
            json_data = json.dumps(json_array)
        print(json_data)
        return results
            
    def chi2_distance(self, histA, histB, eps = 1e-10):
        # compute the chi-squared distance        
        d = pd.DataFrame((.5*(histA.values-histB.values) **2)/(histA.values+histB.values), columns=histB.columns)
        d = d.sum(axis=1)
        return d
