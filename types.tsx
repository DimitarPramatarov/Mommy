/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  DrawerRoot: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  Auth: undefined;
  ModalWork:undefined;
  Home: NavigatorScreenParams<RootTabParamList>| undefined;
  MyProfile: NavigatorScreenParams<RootTabParamList>| undefined;
  Profile: undefined;
  CreatePost: undefined;
  PostDetails: NavigatorScreenParams<RootTabParamList>| undefined;
  MyPostDetails: NavigatorScreenParams<RootTabParamList>| undefined;
  MyProfileScreen: undefined;
  ProfileScreen: NavigatorScreenParams<RootTabParamList>| undefined;
  LeftNavigator: undefined
  Logout: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Auth: undefined
  ModalWork:undefined;
  Home: undefined;
  PostDetails: undefined;
  MyProfileScreen: undefined;
  MyPostDetails: undefined
  CreatePost: undefined;
  ProfileScreen: undefined;
  MyProfile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
