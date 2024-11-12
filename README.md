# pretty-terminals

`pretty-terminals` is a TypeScript library designed to enhance terminal output by adding colorful text and icons. This library is perfect for creating more visually appealing and informative command-line interfaces.

## Installation

To use `pretty-terminals`, install it via npm:

```bash
npm install pretty-terminals
```

## Usage

### Importing the Library

You can import `colorize` and `iconize` functions, along with `Colors` and `Icons` enums, from the library:

```typescript
import { colorize, iconize } from 'pretty-terminals';
import { Colors, Icons } from 'pretty-terminals/types/enum';
```

### Example: Using `colorize`

The `colorize` function allows you to apply a specified color to your terminal text:

```typescript
console.log(colorize(Colors.Red, 'This is a text in red'));
console.log(colorize(Colors.Green, 'This is a text in green'));
console.log(colorize(Colors.Blue, 'This is a text in blue'));
```

### Example: Using `iconize`

The `iconize` function lets you prepend an icon to a message for added emphasis:

```typescript
console.log(iconize(Icons.Success, 'Operation successful!'));
console.log(iconize(Icons.Error, 'An error occurred.'));
console.log(iconize(Icons.Warning, 'This is a warning message.'));
```

### Combining `colorize` and `iconize`

You can combine the `colorize` and `iconize` functions to format your text with both colors and icons:

```typescript
const message = iconize(Icons.Info, colorize(Colors.Cyan, 'This is an informational message.'));
console.log(message);
```

## Available Colors

The `Colors` enum includes the following options:
- `Colors.Black`
- `Colors.Red`
- `Colors.Green`
- `Colors.Yellow`
- `Colors.Blue`
- `Colors.Magenta`
- `Colors.Cyan`
- `Colors.White`
- `Colors.Bright_Black`
- `Colors.Bright_Red`
- `Colors.Bright_Green`
- `Colors.Bright_Yellow`
- `Colors.Bright_Blue`
- `Colors.Bright_Magenta`
- `Colors.Bright_Cyan`
- `Colors.Bright_White`

## Available Icons

The `Icons` enum includes the following options:
- `Icons.Danger`
- `Icons.Info`
- `Icons.Success`
- `Icons.Error`
- `Icons.Warning`
- `Icons.Question`
- `Icons.ArrowRight`
- `Icons.ArrowLeft`
- `Icons.ArrowUp`
- `Icons.ArrowDown`
- `Icons.Check`
- `Icons.Cross`
- `Icons.Star`
- `Icons.Heart`
- `Icons.Lock`
- `Icons.Unlock`
- `Icons.Bell`
- `Icons.Calendar`
- `Icons.Clock`
- `Icons.File`
- `Icons.Folder`
- `Icons.Trash`
- `Icons.Edit`
- `Icons.Mail`
- `Icons.Phone`
- `Icons.Map`
- `Icons.Pin`
- `Icons.Chat`
- `Icons.Search`
- `Icons.Settings`
- `Icons.Sun`
- `Icons.Moon`

## License

This project is licensed under the MIT License.

