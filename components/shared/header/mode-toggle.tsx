'use client'

import {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
        { theme === 'system' ? (
          <SunMoonIcon />
        ) : theme === 'dark' ? (
            <MoonIcon />
          ) : (
              <SunIcon />
        )
      }
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
        System
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
        Light
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
        Dark
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>;
}
 
export default ModeToggle;