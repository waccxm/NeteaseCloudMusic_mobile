<template>
    <svg @click="$router.go(-1)" class="icon" aria-hidden="true" style="width:30px;height: 30px; position: absolute; top: 10px;left: 10px">
        <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <div class="body"  style=" display: flex; justify-content: center; align-items: center;background-color: red">
        <div style=" display: flex; justify-content: center; align-items: center; width:auto; margin-top: 50px">
            <form>
                <table>
                    <tr>
                        <td><span>邮箱：</span></td>
                        <td><input style="border: 1px black solid" type="email" required></td>
                    </tr>
                    <tr>
                        <td><span>密码：</span></td>
                        <td><input style="border: 1px black solid" id="password" type="password" required></td>
                    </tr>
                    <tr>
                        <td><span>确认密码：</span></td>
                        <td><input style="border: 1px black solid" id="confirmPassword" type="password" required></td>
                    </tr>
                    <tr>
                        <td><span>性别：</span></td>
                        <td>
                            <input type="radio" name="gender" checked>
                            男
                            <input type="radio" name="gender">
                            女
                        </td>
                    </tr>
                    <tr>
                        <td><span>爱好：</span></td>
                        <td>
                            <input type="checkbox" name="love">吃
                            <input type="checkbox" name="love">喝
                            <input type="checkbox" name="love">玩
                            <input type="checkbox" name="love" checked>乐
                        </td>
                    </tr>
                    <tr>
                        <td><span>出生日期：</span></td>
                        <td>
                            <input  style="border: 1px black solid; width: 50px;" type="number" placeholder="2000">年
                            <select>
                                <option>1</option><option>2</option><option>3</option>
                                <option>4</option><option>5</option><option>6</option>
                                <option>7</option><option>8</option><option>9</option>
                                <option>10</option><option>11</option><option>12</option>
                            </select>月
                            <input style="border: 1px black solid; width: 50px" type="number" placeholder="1">日
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><span>自我介绍：</span></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                <textarea style="border: 1px black solid; width: 300px; height: 100px; overflow-y:visible">我爱音乐
                </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>上传头像：</td>
                        <td><input type="file"></td>
                    </tr>
                    <tr>
                        <td colspan="2">

                            <input style="border: 1px black solid; margin-right: 10px; margin-top: 10px" type="reset" value="重填">
                            <input style="border: 1px black solid; margin-right: 10px" id="sumbit" type="submit" value="提交">
                            <input style="border: 1px black solid" type="button" value="取消">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registered"
}
</script>

<style scoped>

</style>