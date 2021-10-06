import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryIcon'
})
export class CategoryIconPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    switch(value){
      case "electronics":
        return "dvr";
      case "jewelery":
        return "diamond";
      case "men's clothing":
        return "man";
      case "women's clothing":
        return "woman";
        
    }
    
    return "shopping_bag";
  }

}
