function set_state(num){
    switch(num){
        case 1:
            state = 'about';
        case 2:
            state = 'archive';
        case 3:
            state = 'alumni';
        case 4:
            state = 'apply';
        case 5:
            state = 'contact';
        default:
            state = 'index';  
    }
}