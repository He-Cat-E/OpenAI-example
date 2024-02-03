GOAL
Initial simple Proof of concept, then we will look to build this out further with more development iterations.<br>
FUNCTIONAL REQUIREMENTS</br>
PSEUDO narrative</br>

LOOP datasets
dataset (x,y) pairs of data, sometimes, x,y,z
Pass these to OpenAI for analysis
Ask for 5 x bullet points about the data, literally 5 lines are required
Ask for 1 x recommendation of Chart visualization
Pass these 6 elements back to Node stack, populate Mysql table
		INSERT (bullettext1, bullettext2, bullettext3, bullettext4, bullettext5, chart)

EXAMPLE INPUT
Manually prompting ChatGPT
 
You
Can you provide 5 insights/observations about this dataset Labels ["January","February","March","April","May","June","July"] 
Datasets [{"label":"Total Sales","data":[65,59,180,181,56,55,40]}] 

EXAMPLE OUTPUT
 



EXAMPLE2 INPUT
["January","February","March","April","May","June","July"] 
Data [{"label":"Total Sales","data":[65,59,80,81,56,55,40]},{"label":"Total Profit","data":[15,29,20,100,26,25,20]}] 

OUTPUT
⦁	Sales and Profit Trends: Both total sales and profit exhibit a decreasing trend from January to July.
⦁	Profit Fluctuation in April: While sales peak in April, total profit experiences a significant spike.
⦁	Consistent Profit in May and June: Despite lower sales, total profit remains relatively stable during these months.
⦁	Opportunities for Profit Optimization: Analyzing sales and profit data together can identify opportunities to optimize profit margins.
⦁	Integrated Business Strategy: Businesses should consider an integrated approach to sales and profit management, recognizing the interplay between the two.

Visual Recommendation

can you recommend a visual chart to use for this. say from bar, pie, scatter or funnel?
Answer:
For visualizing the relationship between total sales and total profit across different months, a line chart would be a suitable choice.
