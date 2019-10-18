<template>
  <Page actionBarHidden="true">
    <!-- <FlexboxLayout flexDirection="column" height="100%" width="100%">
            <Header />
    <GridLayout rows="*" height="100%">-->
    <StackLayout>
      <FlexboxLayout
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="#3c7ec7"
        padding="10 20"
      >
        <Label
          class="fa status"
          :text="'fa-long-arrow-left' | fonticon"
          style="color:white"
          @tap="goToHome"
          marginRight="20"
          verticalAlignment="center"
          horizontalAlignment="center"
        />
        <Label text="Profile" color="white" verticalAlignment="center" />
      </FlexboxLayout>
      <FlexboxLayout flexDirection="column" class="profile-content">
        <Label text="PROFILE" height="70" />
        <Label text="SMIT25" height="40" fontWeight="bold" textAlignment="center" />
        <FlexboxLayout justifyContent="space-between">
          <Label text="SERIES PLAYED" height="40" />
          <Label text="MATCHES PLAYED" height="40" />
        </FlexboxLayout>
        <FlexboxLayout justifyContent="space-between">
          <Label text="0" height="30" />
          <Label text="0" height="30" />
        </FlexboxLayout>
      </FlexboxLayout>
    </StackLayout>
    <!-- </GridLayout>
            <Footerm />
    </FlexboxLayout>-->
  </Page>
</template>


<script>
import Vue from "nativescript-vue";
import Home from "./Home";
import Header from "./Header";
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
    }
  },
  components: {
    Header,
    Footerm
  }
};
</script>
<style lang="scss" scoped>
// @import "scss/variable.scss";
// @import "scss/main.scss";

Page {
  background-color: #f2f4fb;
  font-family: "Khand-Medium", "Khand Medium";
  font-size: 16;
}

.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.profile-content {
  margin: 20;
  padding: 20;
  border-radius: 5;
  background-color: #fff;
  box-shadow: 10px 10px 5px grey;
}
</style>