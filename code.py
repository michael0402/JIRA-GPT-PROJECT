
Here's an example implementation of a Dijkstra's algorithm in C++:
```c
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Edge {
    int src;
    int dist;
    Edge(int s, int d) : src(s), dist(d) {}
};

vector<Edge> graph;
vector<int> visited;

// Function to find minimum distance vertex for a given node
int minDistTo(int node, int nodeDist) {
    visited[node] = true;
    
    int n = 0;
    vector<int> distances;
    distances.push_back(nodeDist);
    while (distances.size() > 0) {
   