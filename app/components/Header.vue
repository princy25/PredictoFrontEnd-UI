<template>
  <FlexboxLayout flexDirection="row" justifyContent="space-between" class="actionbar" id="header">
    <FlexboxLayout class="btn menu">
      <Label text="Predicto" paddingLeft="20" fontSize="16" color="white" fontWeight="bold" />
    </FlexboxLayout>
    <FlexboxLayout class="btn pp">
      <Label text="Points:1234" class="Global_point" color="#ffffff" />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
export default {};
</script>

<style scoped>
#header .Global_point {
  background: linear-gradient(to right, #be3073, #fa1642);
  padding: 10;
  font-size: 14;
  color: #fff;
  border-radius: 20;
  font-weight: bold;
  margin-right: 10;
}

#header .btn {
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.actionbar {
  padding: 10;
  height: 160;
  background-image: linear-gradient(to right, #397dc8, #5461cb);
  color: #fff;
  box-shadow: 5px 10px 8px #888888;
}
</style>