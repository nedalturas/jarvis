module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    
    return{
        dir: {
            input: ".",
            output: "_site" 
        }
    };
};