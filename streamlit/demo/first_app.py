import streamlit as st
import numpy as np
import pandas as pd

# introductory stuff
st.title('My first app')

# writing some stuff
# st.write("Here's the first attempt at using data to create a table: ")
# st.write(pd.DataFrame({
#     'first column': [1, 2, 3, 4],
#     'second column': [10, 20, 30, 40]
# }))

# # python magic
df = pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40]
})

# df

# line chart
# chart_data = pd.DataFrame(
#      np.random.randn(20, 3),
#      columns=['a', 'b', 'c'])
#
# st.line_chart(chart_data)

# map plot
# map_data = pd.DataFrame(
#     np.random.randn(1000, 2) / [50, 50] + [37.76, -122.4],
#     columns=['lat', 'lon'])
#
# st.map(map_data)

# widget interactivity
# if st.checkbox('Show dataframe'):
#     chart_data = pd.DataFrame(
#        np.random.randn(20, 3),
#        columns=['a', 'b', 'c'])
#
#     st.line_chart(chart_data)

# option = st.selectbox(
#     'Which number do you like best?',
#      df['first column'])
#
# 'You selected: ', option

# option = st.sidebar.selectbox(
#     'Which number do you like best?',
#      df['first column'])
#
# 'You selected:', option