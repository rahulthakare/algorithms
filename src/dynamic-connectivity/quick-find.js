(function() {
    let arr = [];
    function init(n) {
        for(let i = 0 ; i< n; i++) {
            arr[i] = i;
        }
    }

    init(10);

    function connected(p, q) {
        return arr[p] === arr[q];
    }

    function union(p, q) {
        let pid = arr[p];
        let qid = arr[q];

        for (let i =0; i< arr.length; i++) {
            if (arr[i] === pid) {
                arr[i] = qid;
            }
        }

        console.log(arr);
    }

    union(1, 8);
    union(2, 6);
    union(3, 8);
    union(3, 4);
    union(2, 7);
    union(6, 9);
    union(1, 5);

    console.log(connected(1, 3));
    console.log(connected(2, 5));
    console.log(connected(4, 8));

})();