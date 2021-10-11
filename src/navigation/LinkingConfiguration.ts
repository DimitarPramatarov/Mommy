/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
            Auth: {
            screens: {
              Auth: 'Auth',
            },
          },

          Home: {
            screens: {
              HomeScreen: 'HomeScreen',
              PostDetails: "PostDetails",
              ProfileScreen: 'ProfileScreen'
            },
          },
        },
      },
      DrawerRoot:{
        screens: {
          MyProfile: {
            screens: {
              MyProfileScreen: 'MyProfileScreen',
              MyPostDetails: "MyPostDetails",
            },
          },
        }
      },
      NotFound: '*',
    },
  },
};

export default linking;
