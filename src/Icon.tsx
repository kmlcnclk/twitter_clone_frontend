import {
  TwitterBirdIcon,
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  ProfileIcon,
  MoreIcon,
  BookmarkIcon,
  ListIcon,
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

const Icon = ({
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
    explore: ExploreIcon,
    notification: NotificationIcon,
    message: MessageIcon,
    profile: ProfileIcon,
    more: MoreIcon,
    bookmark: BookmarkIcon,
    list: ListIcon,
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
