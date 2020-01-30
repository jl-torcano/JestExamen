function valida(edad){
	
        if(edad<0){
        	throw new Error('La edad tiene que ser positiva');
        }else if(edad>0&&edad<18){
            
            return false;
        }else  if(edad>40){
            
            return false;
        }
            return true;
    }

 module.exports=valida;
