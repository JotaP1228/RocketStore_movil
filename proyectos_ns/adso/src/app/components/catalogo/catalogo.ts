import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.html',
})
export class CatalogoComponent {
  mySegmentedBarItems: Array<SegmentedBarItem> = [];
  items = ['Hombre', 'Mujer', 'Niño', 'Niña']

    constructor(private router: Router) {
        for (let i = 0; i < 4; i++) {
            const item = new SegmentedBarItem();
            item.title = this.items[i];
            this.mySegmentedBarItems.push(item);
        }
    }
    

    public onSelectedIndexChange(args: SelectedIndexChangedEventData) {
        const segmentedBar = args.object as SegmentedBar;
        const oldIndex = args.oldIndex;
        const newIndex = args.newIndex;
    }

  public onTap(){
    this.router.navigate(["home"]);
    
  }
}