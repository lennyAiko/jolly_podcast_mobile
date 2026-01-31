import { icons, images } from "@/constants";
import { avatarList } from "@/constants/data";
import { ResizeMode } from "expo-av";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const AvatarScreen = () => {
  const [avatar, setAvatar] = useState<string>("");

  const handleSelectAvatar = (avatar: string) => {
    setAvatar(avatar);
  };

  return (
    <View className="w-full h-full">
      <Image
        source={images.gradientBg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode={ResizeMode.COVER}
      />
      <View className="px-8">
        <View className="flex flex-col gap-1 items-start my-2 w-full">
          <Image
            source={icons.headphones}
            className="size-40"
            resizeMode={ResizeMode.CONTAIN}
          />
          <Text className="my-5 text-xl text-white text-start font-nunito-bold">
            Select an avatar to represent your funk
          </Text>
          <View className="flex flex-row flex-wrap gap-x-4 gap-y-10 justify-center items-center">
            {avatarList.map((item, index) => (
              <TouchableOpacity onPress={() => handleSelectAvatar(item.avatar)}>
                <Image source={item.avatar} className="size-28" key={index} />
                <Image
                  source={icons.correct}
                  className={`${item.avatar === avatar ? "" : "hidden"}  absolute right-0 bottom-0 size-8`}
                />
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => {}}
            disabled={false}
            className="flex justify-center items-center py-4 my-10 w-full rounded-full bg-secondary-400 font-nunito-bold"
          >
            {false ? (
              <ActivityIndicator className="text-white size-3" />
            ) : (
              <Text className="text-white font-nunito-bold">Continue</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AvatarScreen;
