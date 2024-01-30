

let sucesion  =  (n) => {
    let a = 0, b = 1, c, d = 1;
    document. write( a, b + " +");
    for(i = 3; i <= n; i ++){
       c= a + b;
        document. write(c + " + ");
        d = d + c;
        a = b;
        b = c;
    }
}

sucesion(prompt ("Numero De Elementos"));



