<template>
  <StackLayout row="1" orientation="horizontal" backgroundColor="red" class="footerr">
    <StackLayout class="font-icon-color">
      <Label class="fa status color" margin="15" :text="'fa-home' | fonticon" @tap="goToHome" />
    </StackLayout>
    <StackLayout class="font-icon-color">
      <Label
        class="fa status color"
        margin="15"
        :text="'fa-eye' | fonticon"
        @tap="goToViewPredict"
      />
    </StackLayout>
    <StackLayout class="font-icon-color">
      <Label
        class="fa status color"
        margin="15"
        :text="'fa-bar-chart' | fonticon"
        @tap="goToLether"
      />
    </StackLayout>
    <StackLayout width="25%">
      <Image src="~/assets/NewPic/profile.png" margin="20" @tap="goToProfileSection" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import Vue from "nativescript-vue";
import Header from "./Header";
import Home from "./Home";
import Viewprediction from "./Viewprediction";
import Letherboard from "./LeatherBoard";
import ProfilePic from "./UserProfile";
import Footerm from "./Footerm";
export default {
  methods: {
    goToHome() {
      this.$navigateTo(Home, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    },
    goToViewPredict() {
      this.$navigateTo(Viewprediction, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },
    goToLether() {
      this.$navigateTo(Letherboard, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },
    goToProfileSection() {
      this.$navigateTo(ProfilePic, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// @import "scss/variable.scss";
// @import "scss/main.scss";
// @import "scss/footerSection.scss";

.font-icon-color {
  color: #fff;
  width: 25%;
}
.footerr {
  height: 160;
}
</style>