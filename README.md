# FoodJammingUI
Ui library for the foodjamming blog

# Coding standards
* eslint pre-commit 
* (husky)

# Design decisions 
## Typography
The idea in Typography is to create different components that re-use as much
styles and css code as possible so that the Components can be easily updated
from centralized styles and they can scale.

I identified 4 main components of typography: Font, Style, Size, Color

I decided to start small and add more as the project advances so I used only
one font which is the base of all all the components. The style contains
Bold, Italic, Muted, or even font weight. In the size I have defined several
usefull sizes for each Component. More sizes will be added later based on the
media size to create a responsive result. Finally the color belongs to the
Theme of the app and shouldn't be part of the Typografy it self.

With the above in mind I created small css components using the
styled-comonents module, and mix and match them to create the Typography.

The naming of the components is based on the usage to make things a bit
simpler.