import React, { type ComponentPropsWithoutRef } from 'react';
import './App.css'

type ButtonVariants = 'primary'| 'secondary' | 'tertiary' |'destructive'|'links';
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariants,
  size?: 'md' | 'lg' | 'xl' | '2xl',
  
}

function Button({children, variant='primary', size='md' ,...restProps}: ButtonProps) {

  return <button className={['btn', variant, size, 'm-2'].join(' ')} {...restProps} >{children}</button>
}

function App() {
  return (
    <>
    <Button style={{marginTop: '20px'}} variant='primary' > Hello akhilesh</Button>
    <Button style={{color: 'blue'}} size='lg' variant='secondary' > Hello akhilesh</Button>
    <Button variant='destructive' > Hello akhilesh</Button>
    </>
  );
}

export default App
