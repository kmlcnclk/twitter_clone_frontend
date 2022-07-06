import React, { FunctionComponent } from 'react';
import {
  TwitterBirdIcon,
  HomeIcon,
  HomeFillIcon,
  ExploreIcon,
  ExploreFillIcon,
  NotificationIcon,
  NotificationFillIcon,
  MessageIcon,
  MessageFillIcon,
  ProfileIcon,
  ProfileFillIcon,
  MoreIcon,
  BookmarkIcon,
  BookmarkFillIcon,
  ListIcon,
  ListFillIcon,
  ThreePointIcon,
  TopTweetsIcon,
  MediaIcon,
  GifIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  LocationIcon,
  MessageOneIcon,
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  BlueTickIcon,
  ThreePointNotCircleIcon,
  TwitterIcon,
  GoogleIcon,
  AppleIcon,
  SearchIcon,
  LeftArrowIcon,
  FillLikeIcon,
  TickIcon,
  TopicsIcon,
  MomentsIcon,
  NewslettersIcon,
  TwitterForProfessionalsIcon,
  TwitterAdsIcon,
  AnalyticsIcon,
  SettingsAndPrivacyIcon,
  HelpCenterIcon,
  DisplayOutIcon,
  DisplayInIcon,
  KeyboardShortcutsIcon,
  NewMessageIcon,
  ExpandIcon,
  CollapseIcon,
  LinkIcon,
  BirthDateIcon,
  JoinIcon,
} from './Icons';

type IconTypes = {
  name: string;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  onClickFunc?: Function;
  color?: string;
  className?: string;
};

const Icon: FunctionComponent<IconTypes> = ({
  name,
  size,
  height,
  width,
  onClickFunc,
  color,
  className,
}: IconTypes) => {
  const icons = {
    twitterBird: TwitterBirdIcon,
    home: HomeIcon,
    homeFill: HomeFillIcon,
    explore: ExploreIcon,
    exploreFill: ExploreFillIcon,
    notification: NotificationIcon,
    notificationFill: NotificationFillIcon,
    message: MessageIcon,
    messageFill: MessageFillIcon,
    profile: ProfileIcon,
    profileFill: ProfileFillIcon,
    more: MoreIcon,
    bookmark: BookmarkIcon,
    bookmarkFill: BookmarkFillIcon,
    list: ListIcon,
    listFill: ListFillIcon,
    threePoint: ThreePointIcon,
    topTweets: TopTweetsIcon,
    media: MediaIcon,
    gif: GifIcon,
    poll: PollIcon,
    emoji: EmojiIcon,
    schedule: ScheduleIcon,
    location: LocationIcon,
    messageOne: MessageOneIcon,
    reply: ReplyIcon,
    retweet: RetweetIcon,
    like: LikeIcon,
    share: ShareIcon,
    blueTick: BlueTickIcon,
    threePointNotCircle: ThreePointNotCircleIcon,
    twitter: TwitterIcon,
    google: GoogleIcon,
    apple: AppleIcon,
    search: SearchIcon,
    leftArrow: LeftArrowIcon,
    fillLike: FillLikeIcon,
    tick: TickIcon,
    topics: TopicsIcon,
    moments: MomentsIcon,
    newsletters: NewslettersIcon,
    twitterForProfessionals: TwitterForProfessionalsIcon,
    twitterAds: TwitterAdsIcon,
    analytics: AnalyticsIcon,
    settingsAndPrivacy: SettingsAndPrivacyIcon,
    helpCenter: HelpCenterIcon,
    displayOut: DisplayOutIcon,
    displayIn: DisplayInIcon,
    keyboardShortcuts: KeyboardShortcutsIcon,
    newMessage: NewMessageIcon,
    expand: ExpandIcon,
    collapse: CollapseIcon,
    link: LinkIcon,
    birthDate: BirthDateIcon,
    join: JoinIcon,
  };

  const Component = icons[name];

  if (size) {
    return (
      <Component
        {...{
          size,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else if (height && width) {
    return (
      <Component
        {...{
          width,
          height,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  }
};

export default Icon;
