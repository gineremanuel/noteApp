import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatGridListModule, MatToolbarModule ],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatGridListModule, MatToolbarModule ],
})

export class MaterialModule { }
