# FoodJammingUI
Ui library for the foodjamming blog

# Coding standards
* eslint
* pre-commit (husky)

# Typography
The idea in Typography is to create different components that re-use as much styles and css code as possible so that the Components can be easily updated from centralized styles and they can scale.

In typography there are 4 main components:
* Font
* Style
* Size
* Color

The font is the base for all the components. The style contains Bold, Italic, Muted, etc... In the size I have defined several usefull sizes for each Component. Finally the color belongs to the Theme of the app and shouldn't be part of the Typografy it self.

With the above in mind I created small css components using the styled-comonents module, and mix and match them to create the Typography. I decided to start small and add more as the project advances. The naming of the components is based on the usage to make things a bit simpler.

# Concerns
* Typography: How do I create different components that can be easily updated from a centralized config.

The first three belong to the typography, but the color belongs to the theme
The solution is to seperate the style from the size. And have centralized configs for each.