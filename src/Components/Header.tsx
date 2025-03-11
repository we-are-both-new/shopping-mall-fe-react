const Header = () => {
    return (
        <div className="sticky top-0 inset-x-0 z-50 group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
                <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <div className="h-full">{/* <SideMenu /> */}</div>
                    </div>

                    <div className="flex items-center h-full">Medusa Store</div>

                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                        <div className="hidden small:flex items-center gap-x-6 h-full">Account</div>
                        {/* <Suspense
                        fallback={
                            <LocalizedClientLink
                            className="hover:text-ui-fg-base flex gap-2"
                            href="/cart"
                            data-testid="nav-cart-link"
                            >
                            Cart (0)
                            </LocalizedClientLink>
                        }
                        > */}
                        {/* <CartButton /> */}
                        {/* </Suspense> */}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
