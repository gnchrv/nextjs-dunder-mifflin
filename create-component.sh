#!/bin/bash

# Abort script on error
set -e

# Validate that the component name is provided
if [ "$#" -ne 1 ]; then
    echo 'Error: Component name required' >&2
    exit 1
fi

# Navigate to the src/components directory
cd "./src/components"

# Make new folder with the input name
mkdir "$1"

# Navigate to the newly created folder
cd $_

# Create an empty file for the CSS module
touch "$1.module.scss"

# Create the component intself
cat <<EOF >"$1.tsx"
import styles from './$1.module.scss'

/**
 * A custom React component
 * @component
 */
export default function $1(
    { children }: { children: React.ReactNode }
) {
    return <>
        {children}
    </>
}
EOF

# Create index.ts file with the provided content
echo "export { default } from './$1'" >index.ts

# Provide the feedback
echo "Component $1 with index.ts, $1.module.scss, and $1.tsx files have been created."

cd - >/dev/null
cd - >/dev/null
