(function(){

    let arr = [];

    function init(n) {
        for(let i=0; i< n; i++) {
            arr[i] = i;
        }
    }
    init(10);

    function root(p) {
        while(p !== arr[p]){
            p = arr[p];
        }
        return p;
    }

    function connected(p, q) {
        return root(p) === root(q);
    }

    function union(p, q) {
        let pid = root(p);
        let qid = root(q);

        arr[pid] = qid;
        console.log(arr);
    
    }
    union(1, 2);
    union(3, 4);
    union(5, 9);
    union(2, 8);
    union(7, 8);
    union(1, 4);
    union(3, 9);
    console.log(connected(1, 2));
    console.log(connected(7, 2));
    



})();