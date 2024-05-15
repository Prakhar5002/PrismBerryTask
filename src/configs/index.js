import Map from '@app/features/map';
import images from '@app/assets/images';
import Bicycle from '@app/features/bicycle';
import Cart from '@app/features/cart';
import Profile from '@app/features/profile';
import Document from '@app/features/document';

export const BOTTOM_TAB_CONFIG = [
  { id: 0, name: 'Bicycle', screen: Bicycle, source: images.bicycle },
  { id: 1, name: 'Map', screen: Map, source: images.map },
  { id: 2, name: 'Cart', screen: Cart, source: images.cart },
  { id: 3, name: 'Profile', screen: Profile, source: images.person },
  { id: 4, name: 'Document', screen: Document, source: images.doc },
];
