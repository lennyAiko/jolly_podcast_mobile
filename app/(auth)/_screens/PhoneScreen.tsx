import { icons, images } from "@/constants";
import { LoginSchema } from "@/schema/auth-schema";
import { ResizeMode } from "expo-av";
import { router } from "expo-router";
import { Formik } from "formik";
import { default as React } from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const PhoneScreen = () => {
  return (
    <View className="pb-14 w-full h-full">
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      <Image
        source={images.onboarding1}
        className="flex w-full h-screen"
        resizeMode={ResizeMode.COVER}
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
      />

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 0 : 40}
        className="z-50 flex-1"
      >
        <View className="flex-1 justify-end items-center px-8">
          <View className="flex flex-col gap-1 items-center px-5 my-2 w-full">
            <Image
              source={icons.jollyicon2}
              className="-mb-10 size-40"
              resizeMode={ResizeMode.CONTAIN}
            />
            <Text className="px-3 text-xl text-center text-white font-nunito-extra-bold">
              PODCASTS FOR AFRICA, BY AFRICANS
            </Text>
          </View>

          <Formik
            initialValues={{ password: "" }}
            validationSchema={LoginSchema}
            onSubmit={() => router.push("/(auth)/login")}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              handleBlur,
            }) => (
              <View className="flex flex-col gap-5 py-5 w-full">
                <View className="flex flex-row gap-1 items-center px-5 py-2 w-full text-base bg-white rounded-full border-2 border-primary-300">
                  <Image source={icons.nigeria} className="size-5" />
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder="Enter your phone number"
                    className="font-nunito-semi-bold text-secondary-200"
                  />
                  {errors.password && touched.password && (
                    <Text className="px-5 mt-1 text-xs text-red-500">
                      {errors.password}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  className="flex justify-center items-center py-4 w-full rounded-full bg-secondary-400 font-nunito-bold"
                >
                  {isSubmitting ? (
                    <ActivityIndicator className="text-white size-3" />
                  ) : (
                    <Text className="text-white font-nunito-bold">
                      Continue
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          <Text className="mb-10 text-xs text-white font-nunito">
            By proceeding, you agree and accept our T&C
          </Text>

          <Text className="mt-5 text-sm text-white font-nunito-extra-bold">
            BECOME A PODCAST CREATOR
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PhoneScreen;
