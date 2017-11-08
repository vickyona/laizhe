<template>
    <div class="detail-page">
        <ticket-header></ticket-header>
        <swipe></swipe>  
        <procard></procard>
        <comments-info></comments-info>
        <ticket-content></ticket-content>
        <feature-info></feature-info>
        <supplier></supplier>
        <comment-container :commentsInfo="commentsInfo"></comment-container>
        <moreprice :morePrice="morePrice"></moreprice>
        <div class="ticket-whitespace"></div>
        <fixbooking v-show="$store.state.isfixbooking"></fixbooking>
        <ordering></ordering>
        <product-book></product-book>
    </div>

</template>

<script>
    import TicketHeader from './header.vue'
    import Swipe from './swipe.vue'
    import Procard from './procard.vue'
    import CommentsInfo from './commentsinfo.vue'
    import TicketContent from './ticketcontent.vue'
    import FeatureInfo from './featureinfo.vue'
    import Supplier from './supplier.vue'
    import CommentContainer from './commentcontainer'
    import Moreprice from './moreprice.vue'
    import Fixbooking from './fixbooking.vue'
    import Ordering from '../../components/ordering'
    import Book from './book.vue'

    export default {
        name: 'detail',
        data () {
            return {
                commentsInfo: [],
                morePrice: []
            }
        },
        created() {
            this.$http.get('/static/productdetail.json').then(response => {
                    var data = response.body.data;
                    this.commentsInfo = data.commentsInfo;
                    this.morePrice = data.morePrice;
                }, response => {
                console.log("ajax.error")
            });
        },
        components: {
            "ticket-header": TicketHeader,
            "swipe": Swipe,
            "procard": Procard,
            "comments-info": CommentsInfo,
            "ticket-content": TicketContent,
            "feature-info": FeatureInfo,
            "supplier": Supplier,
            "comment-container" : CommentContainer,
            "moreprice" : Moreprice,
            "fixbooking" : Fixbooking,
            "ordering" : Ordering,
            "product-book":Book
        },
    }
</script>

<style scoped>
    .detail-page{
        background: #f5f5f5;
    }
    .swiper{
        width: 100%;
        height: 3.5rem;
        background: deeppink;
    }
    .ticket-whitespace{
        width: 100%;
        height: 1rem;
    }
</style>
