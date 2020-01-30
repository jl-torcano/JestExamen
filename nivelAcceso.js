function nivelAcceso(ap1, ap2, ap3){

        if(ap1==true&&ap2==true){
            return 1;
        } else if (ap3==true){
            return 2;
        }
        return 3;
    
}