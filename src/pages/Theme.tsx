import React from 'react';
import {Button, Box, ButtonGroup, Popper, ClickAwayListener,Container} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type LinksProps = {
    links: { link: string, description: string }[];
};

type SplitProps = {
    split: { title:string,links:{link: string, description: string}[]};
};

export function Theme({links}: LinksProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(6, 1fr)',
            }}
        >
            <MyButtonGroup links={links}/>
        </Box>
    )
}

export function MyButtonGroup({links}: LinksProps) {
    return (
        <>
            {
                links.map(
                    ({link, description}) => {
                        return (
                            <Button sx={{p: 2, border: '1px solid grey',}} href={link} target="_blank" rel="noreferrer">
                                {description}
                            </Button>);
                    })
            }
        </>
    )
}

export function MySplitButton({split}: SplitProps) {
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
                <Button onClick={handleToggle}>{split.title as string}<ArrowDropDownIcon/></Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current}>

                <ClickAwayListener onClickAway={handleClose}>
                    <ButtonGroup orientation="vertical">
                        <MyButtonGroup links={split.links}/>
                    </ButtonGroup>
                </ClickAwayListener>
            </Popper>
        </Container>
    )
}