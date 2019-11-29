var q = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function() {
        console.log(this.v1);
    },
    f2 : function() {
        console.log(this.v2);
    }
}

q.f1();
q.f2();

// 함수는 값이다
// 객체는 값을 저장 하는 그릇이다
// 객체는 함수를 저장 할 수 있다 - > grouping