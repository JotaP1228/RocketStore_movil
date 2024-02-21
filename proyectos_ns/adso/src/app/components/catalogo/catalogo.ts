import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.html',
})
export class CatalogoComponent {
  mySegmentedBarItems: Array<SegmentedBarItem> = [];
  public constructor(private router: Router) {
    for (let i = 1; i = 1; i++) {
      const item = new SegmentedBarItem();
      item.title = "Hombre", "Mujer", "Niño", "Niña" + i;
      this.mySegmentedBarItems.push(item);
  } 

// Use the component constructor to inject providers.
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