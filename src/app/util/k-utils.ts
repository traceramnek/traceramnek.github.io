export class KUtils {

    public static scrollElemIntoView(id){
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }

}