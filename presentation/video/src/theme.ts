// Loop design tokens — mirror of prototype/_config.html. Do not drift.
export const colors = {
  forest: '#1D2B22',
  forestDeep: '#12211a',
  sand: '#FFF8EF',
  sandDim: '#EFE7D6',
  cream: '#FBF8F2',
  terracotta: '#B5651D',
  terracottaSoft: '#F3E4D3',
  policy: '#2C5F8A',
  secondary: '#3F6B4F',
  secondaryContainer: '#CFE9D7',
  ink: '#1F1B11',
  inkSoft: '#514A3E',
};

import {loadFont as loadSerif} from '@remotion/google-fonts/SourceSerif4';
import {loadFont as loadSans} from '@remotion/google-fonts/WorkSans';

const serif = loadSerif();
const sans = loadSans();

export const fonts = {
  serif: serif.fontFamily,
  sans: sans.fontFamily,
};
