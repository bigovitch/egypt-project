export class weatherInfo{
    name: string;
     springN:number;
     springM:number ;
      summerN:number ;
     summerM:number ;
      winterN:number ;
       winterM:number ;
       autumnN:number;
       autumnM:number ;
        visitFrom:string ;
        visitTo:string ;
        constructor(name:string , springN:number ,  springM:number, summerN:number , summerM:number , winterN:number , winterM:number , autumnN:number , autumnM:number , visitFrom:string , visitTo:string) {
            this.name = name;
           
            this.springN = springN;
             this.springM = springM;
             this.summerN = summerN;
             this.summerM = summerM;
             this.winterN = winterN;
             this.winterM = winterM;
             this.autumnN =autumnN;
             this.autumnM =autumnM;
            this.visitFrom = visitFrom;
             this.visitTo = visitTo;
        }
    
        
    }