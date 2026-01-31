import { icons, images } from "@/constants";
import { LoginSchema } from "@/schema/auth-schema";
import { useRegistrationData } from "@/store/registrationStore";
import { ResizeMode } from "expo-av";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
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

const ProfileScreen = () => {
  const registrationData = useRegistrationData();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 0 : 40}
        className="z-50 flex-1"
      >
        <View className="flex-1 justify-start items-center px-8">
          <View className="flex flex-col gap-1 items-start my-2 w-full">
            <Image
              source={icons.jollyicon2}
              className="-mb-8 size-40"
              resizeMode={ResizeMode.CONTAIN}
            />
            <Text className="text-xl text-white text-start font-nunito-bold">
              Complete account setup
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
              <View className="flex flex-col flex-1 gap-5 justify-between py-5 w-full h-screen">
                <View className="flex relative flex-col gap-5 items-start w-full">
                  <View className="flex flex-row gap-2 w-full">
                    <View className="flex flex-col gap-1 items-start w-1/2 text-base">
                      <Text className="text-sm font-nunito-semi-bold text-secondary-100">
                        First name
                      </Text>
                      <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        autoCapitalize="none"
                        className="px-5 py-3 w-full text-sm rounded-full border font-nunito-semi-bold text-secondary-100 bg-secondary-300 border-secondary-100"
                      />
                      {errors.password && touched.password && (
                        <Text className="px-5 mt-1 text-xs text-red-500">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                    <View className="flex flex-col gap-1 items-start w-1/2 text-base">
                      <Text className="text-sm font-nunito-semi-bold text-secondary-100">
                        Last name
                      </Text>
                      <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        autoCapitalize="none"
                        className="px-5 py-3 w-full text-sm rounded-full border font-nunito-semi-bold text-secondary-100 bg-secondary-300 border-secondary-100"
                      />
                      {errors.password && touched.password && (
                        <Text className="px-5 mt-1 text-xs text-red-500">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 w-full">
                    <View className="flex flex-col gap-1 items-start w-1/2 text-base">
                      <Text className="text-sm font-nunito-semi-bold text-secondary-100">
                        Phone number
                      </Text>
                      <View className="flex overflow-hidden relative flex-row gap-1 items-center px-2 max-w-full rounded-full border bg-secondary-300 border-secondary-100">
                        <Image source={icons.nigeria} className="size-5" />
                        <TextInput
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          autoCapitalize="none"
                          maxLength={11}
                          className="w-full text-sm font-nunito-semi-bold text-secondary-100"
                        />
                      </View>
                      {errors.password && touched.password && (
                        <Text className="px-5 mt-1 text-xs text-red-500">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                    <View className="flex flex-col gap-1 items-start w-1/2 text-base">
                      <Text className="text-sm font-nunito-semi-bold text-secondary-100">
                        Email address
                      </Text>
                      <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        autoCapitalize="none"
                        className="px-5 py-3 w-full text-sm rounded-full border font-nunito-semi-bold text-secondary-100 bg-secondary-300 border-secondary-100"
                      />
                      {errors.password && touched.password && (
                        <Text className="px-5 mt-1 text-xs text-red-500">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View className="flex relative flex-col gap-1 items-start w-full text-base">
                    <Text className="text-sm font-nunito-semi-bold text-secondary-100">
                      Create password
                    </Text>
                    <View className="flex flex-row gap-1 items-center px-5 py-2 w-full rounded-full px- bg-secondary-300 border-secondary-100">
                      <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        autoCapitalize="none"
                        secureTextEntry={showPassword}
                        className="w-11/12 text-sm font-nunito-semi-bold text-secondary-100"
                      />
                      <TouchableOpacity onPress={handleShowPassword}>
                        {showPassword ? (
                          <Image
                            source={icons.view}
                            tintColor="#FFFFFF"
                            className="size-6"
                          />
                        ) : (
                          <Image
                            source={icons.hide}
                            tintColor="#FFFFFF"
                            className="size-6"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    {errors.password && touched.password && (
                      <Text className="px-5 mt-1 text-xs text-red-500">
                        {errors.password}
                      </Text>
                    )}
                  </View>
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
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileScreen;
