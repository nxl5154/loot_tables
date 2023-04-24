# loot_tables
Loot Table Simulator
Nicholas Lucas

The point of this porject is to provide a loot table builder and simulator all in one. You can use this to not only build loot tables (check out the loot-table-advanced library to learn more) but can be used to provide probabilistic distrubtions for completions of said loot tables.

Example:
Many modern video games use nested loot tables to hide unique boss items. Many are interested in obtaining a completed set of unique items at this boss. You can easily apply a distribution and find the average rate to obtain a certain unique item, but to complete an entire table of say 10 different unique items? 

Try and do the above and you will not go far. Thus this project was created to simulate, based on an input parameter, the average attempts needed complete a personalized loot table. The results are then plotted in a localhost app for your viewability. 

The average attempts or 'kc' required to complete a boss unique log is logged to the console, and you can find the most probably kc from the plot provided by the script.

More example scripts will be continuously added as the maintainer has time.

To run any of the scrips, go into the respective `.examples/game/` repo and run 
`node script.js` on the example you want, this one is named script.js.
