import React from 'react';
import {Button, Box, ButtonGroup, Popper, ClickAwayListener, Container, Tabs, Tab} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {TabContext, TabPanel} from "@mui/lab";

type TabsProps = {
    tabs: { title: string; links: { link: string, description: string }[]; }[];
};

type AppProps = {
    links: { link: string, description: string }[];
    title?: string;

};

function TabGroupOfMe({tabs}: TabsProps) {
    let index = 0;
    return <>
        {tabs.map(
            ({links}) => {
                return (
                    <TabPanel value={(index++).toString()}>
                        <ButtonGroupOfMe links={links}/>
                    </TabPanel>);
            })}
    </>
}

export function Theme({links}: AppProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(6, 1fr)',
            }}
        >
            <ButtonGroupOfMe links={links}/>
        </Box>
    )
}

export function ButtonGroupOfMe({links}: AppProps) {
    return (
        <>
            {
                links.map(
                    ({link, description}) => {
                        return (
                            <Button sx={{p: 2,m:1, border: '1px solid grey',}} href={link} target="_blank" rel="noreferrer">
                                {description}
                            </Button>);
                    })
            }
        </>
    )
}

export function SplitButtonOfMe({title}: AppProps, {links}: AppProps) {
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(true);
    };
    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };
    return (
        <Container sx={{p: 2, border: '1px solid grey',}}>
            <ButtonGroup variant="contained" ref={anchorRef}>
                <Button onClick={handleToggle}>{title as string}<ArrowDropDownIcon/></Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current}>

                <ClickAwayListener onClickAway={handleClose}>
                    <ButtonGroup orientation="vertical">
                        <ButtonGroupOfMe links={links}/>
                    </ButtonGroup>
                </ClickAwayListener>
            </Popper>
        </Container>
    )
}

export function TabsOfMe({tabs}: TabsProps) {
    let index = 0;
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs onChange={handleChange} centered>
                    {
                        tabs.map(
                            ({title}) => {
                                return (
                                    <Tab label={title} value={(index++).toString()}/>);
                            })
                    }
                </Tabs>
            </Box>
            <TabGroupOfMe tabs={tabs}/>
        </TabContext>
    )
}