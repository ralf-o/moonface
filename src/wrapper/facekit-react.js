'use strict';


window.facekit = window.facekit || {};
facekit.react = {};

import FkButton from '../main/js/components/Button';
facekit.react.Button = FkButton.toReact();

import FkButtonGroup from '../main/js/components/ButtonGroup';
facekit.react.ButtonGroup = FkButtonGroup.toReact();

import FkCounter from '../main/js/components/Counter';
facekit.react.Counter = FkCounter.toReact();

import FkPaginationInfo from '../main/js/components/PaginationInfo';
facekit.react.PaginationInfo = FkPaginationInfo.toReact();

import FkPager from '../main/js/components/Pager';
facekit.react.Pager = FkPager.toReact();

import FkTabs from '../main/js/components/Tabs';
facekit.react.Tabs = FkTabs.toReact();

import FkTab from '../main/js/components/Tab';
facekit.react.Tab = FkTab.toReact();



/*
import FKButton from '../../../build/src/main/js/components/Button';
export const Button = FKButton.toReact();

import FKButtonGroup from '../../../build/src/main/js/components/ButtonGroup';
export const ButtonGroup = FKButtonGroup.toReact();

import PaginationInfo from '../../../build/src/main/js/components/PaginationInfo';

import FKPager from '../../../build/src/main/js/components/Pager';
export const Pager = FKPager.toReact();
*/
//import FKCounter from '../../../build/src/main/js/components/Counter';
//export const Counter = FKCounter.toReact();
/*
window.Button = Button;
window.ButtonGroup = ButtonGroup;
window.PaginationInfo = PaginationInfo;
window.Pager = Pager;
*/
//window.Counter = Counter;
