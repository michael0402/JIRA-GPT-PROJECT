
Here is an implementation of the Dijkstra's algorithm in C++:
```
#include <cstdlib>
#include <cstdio>
#include <iostream>

using namespace std;

void dfs(vector<vector<double> > adj, int source, int dest, int weight, double distance) {
    cout << "Visited " << dest << ", distance " << distance << endl;
    for (int i = 0; i < adj[source].size(); i++) {
        int neighbor = adj[source][i] + 1;
        if (neighbor != dest && weight != distance) {
            dfs(adj, neighbor, dest, weight, distance);
        }
   