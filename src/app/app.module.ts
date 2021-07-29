import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPaperComponent } from './components/test-paper/test-paper.component';
import { QuestionSingleSlotComponent } from './components/single slot/question-single-slot/question-single-slot.component';
import { QuestionMultiSlotComponent } from './components/multi slot/question-multi-slot/question-multi-slot.component';
import { QuestionSingleSlotContainerComponent } from './components/single slot/question-single-slot-container/question-single-slot-container.component';
import { QuestionSingleStandardComponent } from './components/single slot/question-single-standard/question-single-standard.component';
import { QuestionMultiSlotContainerComponent } from './components/multi slot/question-multi-slot-container/question-multi-slot-container.component';
import { QuestionMultiStandardComponent } from './components/multi slot/question-multi-standard/question-multi-standard.component';
import { QuestionSingleSlotRefactorComponent } from './components/refactor multi slot/question-single-slot-refactor/question-single-slot-refactor.component';
import { QuestionSingleSlotRefactorContainerComponent } from './components/refactor multi slot/question-single-slot-refactor-container/question-single-slot-refactor-container.component';
import { ConditionalStandardComponent } from './components/conditional slot/conditional-standard/conditional-standard.component';
import { ConditionalSlotMethodOneComponent } from './components/conditional slot/conditional-slot-method-one/conditional-slot-method-one.component';
import { ConditionalSlotMethodTwoComponent } from './components/conditional slot/conditional-slot-method-two/conditional-slot-method-two.component';
import { ConditionalSlotMethodOneSlotComponent } from './components/conditional slot/conditional-slot-method-one-slot/conditional-slot-method-one-slot.component';
import { ConditionalSlotMethodTwoSlotComponent } from './components/conditional slot/conditional-slot-method-two-slot/conditional-slot-method-two-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPaperComponent,
    QuestionSingleSlotComponent,
    QuestionSingleStandardComponent,
    QuestionSingleSlotContainerComponent,
    QuestionMultiSlotContainerComponent,
    QuestionMultiSlotComponent,
    QuestionMultiStandardComponent,
    QuestionSingleSlotRefactorComponent,
    QuestionSingleSlotRefactorContainerComponent,
    ConditionalStandardComponent,
    ConditionalSlotMethodOneComponent,
    ConditionalSlotMethodTwoComponent,
    ConditionalSlotMethodOneSlotComponent,
    ConditionalSlotMethodTwoSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
