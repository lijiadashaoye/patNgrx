import { Action } from '@ngrx/store';
import { PetTag, initialTag } from './../core/pet-tag.model';
import {
    SELECT_SHAPE,
    SELECT_FONT,
    ADD_TEXT,
    TOGGLE_CLIP,
    TOGGLE_GEMS,
    COMPLETE,
    RESET
} from './pet-tag.actions';
export function petTagReducer(state: PetTag = initialTag, action: Action) {
    switch (action.type) {
        case SELECT_SHAPE:
            return { ...state, shape: action.payload };
        case SELECT_FONT:
            return { ...state, font: action.payload };
        case ADD_TEXT:
            return { ...state, text: action.payload };
        case TOGGLE_CLIP:
            return { ...state, clip: !state.clip };
        case TOGGLE_GEMS:
            return { ...state, gems: !state.gems };
        case COMPLETE:
            return { ...state, complete: action.payload };
        case RESET:
            return { ...state, ...initialTag };
        default:
            return state;
    }
}

import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        StoreModule.provideStore({ petTag: petTagReducer })
    ]
})
export class ReducerModule { }