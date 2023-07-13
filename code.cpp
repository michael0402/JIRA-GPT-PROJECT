
Here's an implementation of the Dijkstra algorithm in C++:
```cpp
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

class Graph {
    // The graph is represented as an adjacency list
    vector<vector<int>> adj;

public:
    Graph() {}

    // Add a vertex to the graph
    void add_vertex(int v) {
        adj.push_back(vector<int>(1, v));
    }

    // Add an edge between vertices a and b
    void add_edge(int a, int b) {
        adj.at(a).push_back(b);
    }

   