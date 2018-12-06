# -*- coding: utf-8 -*-
"""
Created on Tue Nov 27 17:40:45 2018

@author: shivarama
"""

import requests



#%%
data = {'docNameRA': r'test.pdf', 'docNameMS': 'test.pdf'}  #This is for pdf docs
#data = {'docNameRA': r'testRA.docx', 'docNameMS': 'testMS.docx'}  #This is for word docs
#data = {'docNameRA': r'test.xlsx', 'docNameMS': ''}  #This is for excel docs
#%%
'''
# Cherrypy POST
r = requests.post("http://127.0.0.1:8080/", json = data)
print(r)
'''
#%%
#Flask POST
#r = requests.post("http://127.0.0.1:8000/predict_row_new", data = data)
#print(r)

#%%
#Bluemix API
r = requests.post("https://auroraapi.mybluemix.net/predict_row_new", data = data)
print(r)