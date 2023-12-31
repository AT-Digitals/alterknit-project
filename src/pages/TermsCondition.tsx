import { Box, Typography, useMediaQuery } from "@mui/material";

import { useEffect } from "react";

export default function TermsCondition() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isXsScreen = useMediaQuery("(max-width:600px)");

    return (
        <>
            <Box maxWidth={"1340px"} margin={isXsScreen ? "0px" : "0 auto"} padding={"10px"}>
                <Typography
                    paddingTop={"40px"}
                    textAlign={"center"}
                    color={"black"}
                    fontWeight={"500"}
                    lineHeight={1}
                    fontSize={{ xs: "45px", sm: "80px" }}
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    textTransform="lowercase"
                    paddingBottom={isXsScreen ? "20px" : "30px"}
                >
                    TERMS AND CONDITIONS
                </Typography>
                <Box margin={"10px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                    >
                        These terms and conditions (“Terms and Conditions”) govern your use
                        of AlterKnit New York (“AlterKnit New York,” “we” or “us”) services
                        and website (“Site”). By using, visiting, or browsing AlterKnit New
                        York services or Site, you accept and agree to be bound by these
                        Terms and Conditions. If you do not agree to these Terms and
                        Conditions, you should not use the AlterKnit New York services or
                        Site. These Terms and Conditions are an ongoing contract between you
                        and AlterKnit New York and apply to your use of the AlterKnit New
                        York services and Site.These Terms and Conditions affect your rights
                        and you should read them carefully. The services and Site are
                        available only to individuals who are not less than 13 years old. If
                        you have any questions about these Terms and Condition or the Site
                        please contact us at request@alterknitnewyork.com.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CHANGES TO TERMS AND CONDITIONS
                    </Typography>
                    <Typography color={"#575656"} fontWeight={"500"} fontFamily={`"ProximaNovaMedium", sans-serif`} fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }} letterSpacing={"0px"}
                        lineHeight={"1.2"} paddingTop={"3px"}>
                        You can review the most current version of the Terms and Conditions
                        at any time on this page. We reserve the right from time to time,
                        with or without notice to you, to change these Terms and Conditions
                        in our sole and absolute discretion. The most current version of
                        these Terms and Conditions can be reviewed by clicking on the “Terms
                        and Conditions” located at the footer of any page of the Site. The
                        most current version of the Terms and Conditions will supersede all
                        previous versions. It is your responsibility to check our Site
                        periodically for changes. Your use of our Site or continued use of
                        our service after changes are made means that you agree to be bound
                        by such changes, so please review it frequently.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        PRIVACY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Any personally identifying information submitted on the Site is
                        subject to our Privacy Policy, the terms of which are incorporated
                        herein. Please review our Privacy Policy to understand our
                        practices.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        GARMENT REPAIR SERVICES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        You accept the terms and conditions associated with AlterKnit New
                        York’s repair service. By requesting service you acknowledge that
                        you may be requesting repair of a previously damaged item and that
                        you are and/or may be submitting garment (s) that have been damaged
                        prior to receipt by AlterKnit New York. You authorize AlterKnit New
                        York to perform all services (including repair, replacement and/or
                        addition of all necessary or requested materials and components
                        necessary or desirable to repair the items. You acknowledge that
                        AlterKnit New York shall use all reasonable efforts to repair all
                        items per the terms of use and that Alterknit New York is not
                        responsible for disagreements on any and all service results and
                        that we do not guarantee completion dates.Upon your approval we will
                        charge your provided payment method in advance. This holds your
                        place in our repair line. We may provide you an estimated time of
                        order completion. However we do not guarantee completion dates. Due
                        to the high demand of our services once you approve pricing and your
                        payment is processed we will not provide refunds. If you reverse any
                        processed payments resulting in Alterknit New York having to
                        reprocess your payment there will be a $25.00 processing fee.We will
                        always use our best judgment and craftsmanship when repairing a
                        garment. While we take extreme care and attention, we cannot
                        guarantee that all repairs will meet products original condition. We
                        cannot assume any responsibility for inherent damages, weaknesses,
                        and defects in fabric and their fibers that are not apparent prior
                        to being repaired or cleaned. We reserve the right to decline
                        service for any item at any time before or after being submitted for
                        repair. During the repair process members of our team work with
                        their faces very close to the garment. We reserve the right to clean
                        your garment where there is visible pet or human hair, dirt, food or
                        excessive smell. Additional fees may be incurred if laundering
                        services are required or for additional holes. Any additional holes
                        found will be fixed and may incur additional fees. There are no
                        refunds on any/all repairs or alterations. All services repairs and
                        alterations are final sale.Due to Covid-19 our drop-off location is
                        not operating on this time. If you had previously submitted your
                        order via that location and you declined service and/or we were
                        unable to repair your garment we will be shipping your item back to
                        you for a $15.00 shipping fee.
                        <Typography
                            marginTop={"50px"}
                            color={"#575656"}
                            fontWeight={"bold"}
                            fontFamily={`"ProximaNovaMedium", sans-serif`}
                            fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                            letterSpacing={"0px"}
                        >
                            Garment repair services – loss
                        </Typography>
                        <Typography
                            marginTop={"50px"}
                            color={"#575656"}
                            fontWeight={"500"}
                            fontFamily={`"ProximaNovaMedium", sans-serif`}
                            fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                            letterSpacing={"0px"}
                            lineHeight={"1.2"}
                        >
                            If we determine that we are responsible for the loss of an item
                            submitted for repair or alteration we will refund 30% of the
                            original value of garments less than a year old with a maximum
                            refund amount of $250 with substantial documentation. We require
                            the original store receipt to process claims.For outbound
                            packages, we include $100 of insurance in case of loss or damage.
                            Extra insurance and signature required delivery is available for
                            an additional charge depending on the coverage amount. We will not
                            refund beyond the insurance amount and we will not refund cost of
                            repair in case of loss or damage by the shipping carrier.
                        </Typography>
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        GARMENT CLEANING SERVICES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        We may offer a clothes cleaning service by providing users with
                        pickup, cleaning, and delivery of their clothes. We are not
                        responsible for articles not claimed. In accordance with New York
                        State Law, garments not picked up within six months will be handled
                        in accordance with New York State regulations. We exercise utmost
                        care in processing articles entrusted to us and use such processes
                        which, in our opinion, are best suited to the nature and condition
                        of each individual article. Nevertheless, we cannot assume
                        responsibility for inherent weaknesses of or defects in materials
                        that are not readily apparent prior to processing. This applies
                        particularly, but not exclusively to suedes, leathers, silks,
                        satins, double-faced fabrics, vinyls, polyurethanes, etc.
                        Responsibility also is disclaimed for trimmings, buckles, beads,
                        buttons, bells and sequins. In laundering we cannot guarantee
                        against color loss and shrinkage; or against damage to weak or
                        tender fabrics. We are not responsible for loose items in pockets or
                        bundles of garments and are not responsible for damage to your
                        garments from items left in pockets or bundles of garments. There
                        are no refunds on any/all cleaning services. All cleaning services
                        are final sale.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        REPAIR SERVICES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Customer hereby authorizes AlterKnit New York to perform all
                        services (including repair, replacement and/or addition of all
                        necessary or requested materials and components) necessary or
                        desirable to repair the items. AlterKnit New York shall use
                        reasonable efforts to repair all items per the terms. WE CANNOT
                        GUARANTEE REPAIR AND ALTERATIONS REQUEST WILL MEET PRODUCTS ORIGINAL
                        CONDITION/AESTHETIC.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        GARMENT CLEANING SERVICES - LOSS OR DAMAGE
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        As an added convenience to our customers, we do not take inventory
                        when picking up garments and we do not require a signed delivery
                        confirmation. We take inventory of the items you entrust us once we
                        get your package to our facility and itemize each garment.
                        Difference in count must be reported within 48 hours after delivery
                        of shipment. In the event that a garment has been lost or damaged
                        our liability will not exceed the equivalent value of ten (10) times
                        the cost of cleaning the item, regardless of brand or cost of the
                        garment, which is the Industry standard.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        REPORTING A CLAIM FOR LOSS OR DAMAGE
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        We must receive notice of a claim due to damage (visible or
                        concealed), or shortage within 48 Hours after delivery of the
                        shipment. Notice of claims will take 30 days to process and
                        investigate. Notice of claims for which you are seeking more than
                        US$50 must be in writing. All claims must be made within the time
                        limits set forth above. Your notice of claim must include complete
                        date of shipment, number of pieces, description of each piece and
                        original store receipt. Failure to provide us with notice in the
                        manner and within the time limits set forth above will result in
                        denial of your claim, and we will have no liability or obligation to
                        pay your claim. The filing of a lawsuit does not constitute
                        compliance with these notice provisions. Written documentation
                        supporting the amount of your claim must be delivered to us within
                        the time frame specified above. We are not obligated to act on any
                        claim until all charges have been paid. The claim amount may not be
                        deducted from these charges or from any outstanding balance owed to
                        us. We are not responsible for any loss or damage after delivery to
                        your home, doorman, concierge, other apparently authorized person or
                        third-party carrier. We are not responsible for any loss or damage
                        due to handling by, storage with or delivery by your doorman,
                        concierge or other authorized person, including, for instance, the
                        erroneous delivery of your garment to a third party cleaner. FAILURE
                        TO COMPLY WITH ANY OF THE ABOVE CONDITIONS WILL RESULT IN THE DENIAL
                        OF YOUR CLAIM.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        UNCLAIMED ITEMS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        In the case that items were either unrepairable or service was
                        declined upon receiving estimation, you will have six months to pick
                        up the items or they will be disposed of at our discretion.
                        Completed and unpaid items will incur a $10/month fee after three
                        weeks.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        DELIVERIES AND PICK-UPS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Deliveries or pick-ups that require multiple attempts, excessively
                        long wait times or address street is unaccessible without prior
                        notification to enter by car are subject to an additional $25 fee.
                        Delivery is complimentary from residential doorman buildings in
                        select areas when YOU USE our service. If you decline service and/or
                        your item is unrepairable pick up fees will apply.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        ONLINE STORE ITEMS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        We may offer products for purchase through our Site via an online
                        store. By agreeing to these Terms of Conditions, you represent that
                        you are at least the age of majority in your state or province of
                        residence. You may not use our products for any illegal or
                        unauthorized purpose nor may you, in the use of the Service, violate
                        any laws in your jurisdiction (including but not limited to
                        copyright laws).You must not transmit any worms or viruses or any
                        code of a destructive nature. A breach or violation of any of the
                        Terms and conditions will result in an immediate termination of your
                        Services.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        FREE CLEANING PROMOTION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Cleaning value of up to $35. Valid for first time customers only.
                        Offer valid on first fixed sweater only. Coats jackets, pants,
                        dresses, blankets or any other garments, and garments with stains or
                        excessive dirt will incur additional fees. Offer cannot be combined
                        with any other offers or promotions.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CASH CLUB PROMOTION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Knit NY, LLC (“we”, “our”, “us” or “Sponsor”) may, from time to
                        time, offer individuals (“you”) the opportunity to earn rewards (the
                        “Program”) by referring family, friends and colleagues by using our
                        services at Alter Knit New York or www. alterknitnewyork.com (the
                        “Site”). We reserve the right to terminate or suspend the Program at
                        any time for any or no reason.These terms (“Terms and Conditions”)
                        apply to your participation in the Program. By participating in the
                        Program, you agree to use the Program in the manner specified in
                        these Terms and Conditions. If you do not agree to these Terms &
                        Conditions in their entirety you are not authorized to register as a
                        Referrer (defined below) or to participate in the Program in any
                        manner. Participation in the Program (and the benefits that are
                        offered under the Program) is at our sole discretion; and, we have
                        the right to change the Terms and Conditions, in whole or in part,
                        at any time with or without notice. 1. How the Program Works a.
                        Program Participation, Generally To participate in the Program as a
                        Referrer (defined below), you must login to your account at the Site
                        and follow the on-screen instructions to receive a unique and
                        personal URL (“Personal Link”), which may be shared with friends,
                        family and colleagues. Individuals who refer others to the Site are
                        called “Referrer(s)”; individuals who are referred are called
                        “Referred Customer(s).” A Referrer (collectively, “Users”) may be
                        eligible to receive certain Reward(s) (defined below), and fully
                        compliant with, these Terms and Conditions and the Referred Customer
                        is a Qualified Referral (defined below). We reserve the right to
                        disqualify any User at any time from participation in the Program
                        for any failure to comply with any of these Terms and Conditions.b.
                        Eligibility A User must be of legal age in their jurisdiction (and
                        in any event at least 18 years of age). A User may not participate
                        in the Program where doing so would be prohibited by any applicable
                        law or regulation.c. Qualified Referrals Rewards will only be
                        awarded for Qualified Referrals. A “Qualified Referral” means that
                        all the following conditions are met: The Referred Customer has not
                        previously used any service with AlterKnit New York The Referred
                        Customer spends $75 or more on service with AlterKnit New York,
                        using the Referrer’s Personal Link. The Referred Customer is
                        otherwise in full compliance the Terms and Conditions; Only one
                        Qualified Referral may be earned for each Referred Customer; and,
                        Any additional or subsequent purchases made by a Referred Customer
                        will not be a Qualified Referral.d. Earning Cash Rewards Referrer
                        will receive ten dollar (U.S. $10.00) cash (a “Reward”) for each
                        valid Qualified Referral that uses the Personal Link supplied by the
                        Referrer when the first order placed by each such Qualified Referral
                        is completed. Each Qualified Referral will receive a ten dollar
                        (U.S. $10.00) Cash, applied after full completion of referred
                        customer order of $75 of their first purchase from the Site. If
                        Referred Customer fails to apply the Reward to the first order, it
                        will be forfeited. A Referred Customer may not use more than one
                        Personal Link. Cash Rewards are subject to verification. We may
                        withhold a Reward for investigation, or refuse to process any
                        transaction we deem fraudulent, suspicious, in violation of these
                        Terms and Conditions, or that we believe will impose liability on us
                        or our subsidiaries, affiliates or any of our or their respective
                        officers, directors, employees, representatives and agents. Rewards
                        are not transferable and may not be auctioned, traded, bartered or
                        sold. Upon termination of the Program or any portion thereof for any
                        reason, or upon cancellation of Referrer’s account for any reason,
                        any unredeemed Rewards accumulated by Referrer are forfeited.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        MERCHANDISE
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Certain products may be available exclusively online through the
                        Site. These products may have limited quantities and are subject to
                        return or exchange only according to our Return Policy. We have made
                        every effort to display as accurately as possible the colors and
                        images of our products that appear at the store. We cannot guarantee
                        that your computer monitor’s display of any color will be accurate.
                        Any offer for any product made on this Site is void where
                        prohibited. We do not warrant that the quality of any products,
                        services, information, or other material purchased or obtained by
                        you will meet your expectations.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        MERCHANDISE AVAILABILITY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Some featured items may be available only in limited quantities or
                        only while supplies last. Once an item is out of stock, we will
                        attempt to remove the item promptly from display on the Site.
                        Display of an item on the Site is not a guarantee that the item is
                        currently in stock or that it will be available on our Site when you
                        visit again. If you are unable to locate a particular item that
                        caught your attention on a previous visit to the Site or if you have
                        any questions concerning the availability of a particular item,
                        please contact us at request@alterknitnewyork.com. We will fulfill
                        your requests whenever possible.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        ERRORS, ACCURACIES AND OMISSIONS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Occasionally there may be information on our site or in the Service
                        that contains typographical errors, inaccuracies or omissions that
                        may relate to product descriptions, pricing, promotions, offers,
                        product shipping charges, transit times and availability. We reserve
                        the right to correct any errors, inaccuracies or omissions, and to
                        change or update information or cancel orders if any information in
                        the Service or on any related website is inaccurate at any time
                        without prior notice (including after you have submitted your
                        order). We undertake no obligation to update, amend or clarify
                        information in the Service or on any related website, including
                        without limitation, pricing information, except as required by law.
                        No specified update or refresh date applied in the Service or on any
                        related website, should be taken to indicate that all information in
                        the Service or on any related website has been modified or updated.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        YOUR ACCOUNT
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        You are responsible for, and agree to pay promptly, all charges to
                        your account, including applicable taxes and purchases by you or
                        anyone you allow to use your account. You agree and accept
                        responsibility for keeping all your account information current,
                        including address, payment information, telephone number, e-mail
                        address, and alternate receiver for your order by updating us
                        promptly via phone at 212.473.MEND (6363). You agree that you will
                        not provide fraudulent information and that you are solely
                        responsible for any information you provide to us, and accept
                        responsibility for all activities that occur under your account. You
                        will comply with all laws applicable to your activities on the Site
                        and with this Agreement.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        USER COMMENTS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        Any comments, suggestions, ideas, materials and other submissions
                        (“User Comments”) that you send to AlterKnit New York are provided
                        on a non-confidential basis. By submitting User Comments, you are
                        granting AlterKnit New York an irrevocable and unrestricted license
                        for any purpose whatsoever, including use, reproduction,
                        publication, broadcast, posting, modification, transmission,
                        display, and distribution. However, because we value the trust that
                        you have placed in us, we will not use any of your personal
                        information (name, etc.) in connection with your User Comments
                        without your consent. For further information regarding AlterKnit
                        New York’s protection of your personal information, please see our
                        Privacy Policy. You agree that no User Comments submitted by you to
                        the Site will violate any right of any third party, including
                        copyright, trademark, privacy or other personal or proprietary
                        rights. You further agree that no User Comments submitted by you to
                        the Site will be or contain libelous or otherwise unlawful, abusive
                        or obscene material. You are and shall remain solely responsible for
                        the content of any User Comments you make.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        LINKS TO OTHER WEBSITES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        When you access a non-AlterKnit New York website, please realize
                        that it is independent of us. Linking to any off-site pages is at
                        your own risk. We make no warranties or representations about any
                        non-AlterKnit New York website and has no responsibility for such
                        websites or their content. In addition, certain third party sites
                        may also provide links to the Site. None of such links should be
                        deemed to imply that we endorse such third party sites or any
                        content therein.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        COPYRIGHT AND OWNERSHIP
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        All Site content, design, text, graphics, and interfaces; the
                        collection, selection, and arrangement thereof; and all software are
                        the property of, or duly licensed to, AlterKnit New York. Consent is
                        granted to view, electronically copy, and print in hard copy
                        portions of this Site for the sole purpose of placing an order. Any
                        other use of materials on this Site, including modification,
                        distribution, or reproduction for purposes other than those noted
                        above, without the prior written permission of AlterKnit is strictly
                        prohibited. You acknowledge that AlterKnit New York and/or
                        third-party content providers remain the owners of such material and
                        that you do not acquire any of those ownership rights by downloading
                        copyrighted material. We reserve the right to revoke this
                        authorization at any time, and any use shall be discontinued
                        immediately on written notice from us.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        ACCEPTABLE USE POLICY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        You agree not to engage in unacceptable use of the AlterKnit New
                        York services or Site, which includes, without limitation, use of
                        the AlterKnit New York services or Site to: (a) disseminate or
                        transmit unsolicited messages, chain letters, or unsolicited
                        commercial e-mail; (b) disseminate or transmit material that, to a
                        reasonable person, may be abusive, obscene, pornographic,
                        defamatory, harassing, grossly offensive, vulgar, threatening, or
                        malicious; (c) disseminate or transmit files, graphics, software, or
                        other material that actually or potentially infringes the copyright,
                        trademark, patent, trade secret, or other intellectual property
                        right of any person; (d) create a false identity or otherwise
                        attempt to mislead any person as to the identity or origin of any
                        communication; (e) export, re-export, or permit downloading of any
                        message or content in violation of any export or import law,
                        regulation, or restriction of the United States and its agencies and
                        authorities, or without all required approvals, licenses, or
                        exemptions; (f) interfere with, disrupt, or attempt to gain
                        unauthorized access to other accounts on the AlterKnit New York
                        services or Site or any other computer network; (g) disseminate or
                        transmit viruses, Trojan horses, or any other malicious code or
                        program; or (h) engage in any other activity deemed by AlterKnit New
                        York. to be in conflict with the spirit or intent of this Agreement.
                        <Typography
                            marginTop={"45px"}
                            color={"#575656"}
                            fontWeight={"500"}
                            fontFamily={`"ProximaNovaMedium", sans-serif`}
                            fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                            letterSpacing={"0px"}
                            lineHeight={"1.2"}
                            paddingTop={"3px"}
                        >
                            WARRANTY DISCLAIMER. YOU EXPRESSLY AGREE THAT USE OF THE ALTERKNIT
                            NEW YORK SERVICES, THE SITE, AND THE INTERNET IS ENTIRELY AT YOUR
                            OWN RISK. THE ALTERKNIT NEW YORK SERVICES, THE SITE, AND ITS
                            CONTENTS ARE PROVIDED ON AN “AS IS,” “AS AVAILABLE” BASIS. TO THE
                            EXTENT PERMITTED BY APPLICABLE LAW, ALTERKNIT NEW YORK DISCLAIMS
                            ALL REPRESENTATIONS AND WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                            IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF
                            MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT
                            TO ALTERKNIT NEW YORK SERVICES, THE WEBSITE, OR ITS CONTENTS OR
                            WITH RESPECT TO ANY INFORMATION, SERVICES, AND PRODUCTS PROVIDED
                            THROUGH OR IN CONNECTION WITH ANY OF THE ALTERKNIT NEW YORK
                            SERVICES; ALTERKNIT NEW YORK DOES NOT ADOPT ANY REPRESENTATION OR
                            WARRANTY OF ANY MANUFACTURER OR MERCHANT OF ANY SUCH INFORMATION,
                            SERVICE, OR PRODUCTS. ALTERKNIT NEW YORK MAKES NO REPRESENTATIONS
                            OR WARRANTIES OF ANY KIND AS TO THE AVAILABILITY, ACCURACY, OR
                            CONTENT OF ANY INFORMATION, SERVICES, OR PRODUCTS OBTAINED THROUGH
                            THE SITE OR THE ALTERKNIT NEW YORK SEVICES. ALTERKNIT NEW YORK
                            DOES NOT WARRANT THAT THE FUNCTIONS PROVIDED BY THE SITE WILL BE
                            UNINTERRUPTED OR ERROR FREE, OR THAT THIS SITE OR THE SERVER THAT
                            MAKES IT AVAILABLE IS FREE FROM VIRUSES OR OTHER HARMFUL
                            COMPONENTS. LIMITATION OF LIABILITY. NEITHER ALTERKNIT NEW YORK
                            NOR ANY OF ITS DIRECTORS, EMPLOYEES, SHAREHOLDERS, AFFILIATES,
                            AGENTS, REPRESENTATIVES, THIRD-PARTY INFORMATION PROVIDERS,
                            MERCHANTS, OR LICENSORS (COLLECTIVELY, “ALTERKNT NEW YORK
                            PARTIES”) SHALL BE LIABLE FOR ANY DAMAGES OF ANY KIND, INCLUDING,
                            WITHOUT LIMITATION, COMPENSATORY, DIRECT, INDIRECT, SPECIAL,
                            INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; LOSS OF DATA,
                            INCOME, OR PROFIT; OR LOSS OR DAMAGE TO PROPERTY, ARISING OUT OF
                            OR IN CONNECTION WITH THE USE OF, OR THE INABILITY TO USE, THE
                            SITE, THE ALTERKNIT NEW YORK SERVICES, OR THE INTERNET. YOUR SOLE
                            AND EXCLUSIVE REMEDY HEREUNDER SHALL BE FOR YOU TO DISCONTINUE
                            YOUR USE OF THE ALTERKNIT NEW YORK SERVICE AND TO TERMINATE THIS
                            AGREEMENT.
                        </Typography>
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        COMPLIANCE
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        The material in the Site is provided for lawful purposes only.
                        AlterKnit New York controls and operates this Site from New York,
                        New York, USA, and makes no representation that these materials are
                        appropriate or available for use in other locations. If you use the
                        Site from other locations, you are responsible for compliance with
                        applicable local laws.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        SRVABILITY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        If any portion of this Agreement is held invalid or unenforceable,
                        that portion shall be construed as nearly as possible to reflect the
                        original intention of the parties, and the remainder of this
                        Agreement shall remain in full force and effect. The failure of
                        either party to insist upon strict performance of any provision of
                        this Agreement shall not be construed as a waiver of any provision
                        or right.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CHOICE OF LAW
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        This Agreement shall be governed by the laws of the State of New
                        York without regard to its conflict of laws rules. You expressly
                        agree that exclusive jurisdiction for any claim or dispute with
                        AlterKnit New York or relating in any way to your use of AlterKnit
                        New York services or the Site resides in the federal and state
                        courts located in the Borough of Manhattan, and you further
                        expressly consent and agree to personal jurisdiction by such courts
                        sitting in the State of New York in connection with any such
                        dispute, including any claim involving AlterKnit New York or any of
                        its affiliates. Any cause of action by you must be instituted within
                        one year after the claim or cause of action has arisen, or be
                        barred.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        INDEMINIFACTION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        You agree to defend, indemnify, and hold all AlterKnit New York
                        Parties harmless from any and all suits, actions, legal or
                        administrative proceedings, claims, demands, damages, liabilities,
                        and expenses, including attorney’s fees and costs, arising in
                        connection with a violation of this Agreement by or on behalf of you
                        or otherwise through use of your account.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"500"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        TERMINATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                    >
                        The obligations and liabilities of the parties incurred prior to the
                        termination date shall survive the termination of this agreement for
                        all purposes.These Terms of Service are effective unless and until
                        terminated by either you or us. You may terminate these Terms of
                        Service at any time by notifying us that you no longer wish to use
                        our Services, or when you cease using our site. If in our sole
                        judgment you fail, or we suspect that you have failed, to comply
                        with any term or provision of these Terms of Service, we also may
                        terminate this agreement at any time without notice and you will
                        remain liable for all amounts due up to and including the date of
                        termination; and/or accordingly may deny you access to our Services
                        (or any part thereof).
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        ENTIRE AGREEMENT
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"3px"}
                        mb={10}
                    >
                        The failure of us to exercise or enforce any right or provision of
                        these Terms of Service shall not constitute a waiver of such right
                        or provision. These Terms of Service and any policies or operating
                        rules posted by us on this site or in respect to The Service
                        constitutes the entire agreement and understanding between you and
                        us and govern your use of the Service, superseding any prior or
                        contemporaneous agreements, communications and proposals, whether
                        oral or written, between you and us (including, but not limited to,
                        any prior versions of the Terms of Service). Any ambiguities in the
                        interpretation of these Terms of Service shall not be construed
                        against the drafting party.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
