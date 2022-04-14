module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:  
			`
			@import "@/assets/styles/_variables.scss";
			@import "@/assets/styles/_fonts.scss";
			@import "@/assets/styles/_global-rules.scss";
      @import "@/assets/styles/_animations.scss";
			`
      }
    }
  }
};