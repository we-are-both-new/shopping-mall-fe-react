import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Password } from "../Components/Password";

const schema = z.object({
    email: z.string().email("유효한 이메일을 입력하세요").nonempty("이메일을 입력하세요"),
    password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
    name: z.string().nonempty("이름을 입력하세요"),
});

type FormData = z.infer<typeof schema>;

const Join = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate("/");
    };

    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row">
                    <div className="w-full pt-20 pb-20 ">
                        <h2 className="text-center text-2xl font-600 mb-15">회원가입</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4 pl-10 pr-10 sm:pl-0 sm:pr-0 sm:max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    {...register("name")}
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`pt-6 pl-3 pb-1 block w-full h-13 mt-0 bg-ui-bg-field border rounded-md appearance-none
                                    focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base
                                    hover:bg-ui-bg-field-hover peer border-gray-300 outline-none placeholder-transparent
                                    ${name && "focus:ring-2 focus:ring-[rgba(204,7,30,1)]"}`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className={`pointer-events-none absolute left-3 text-gray-500 transition-all top-1/2 transform -translate-y-1/2
                                    ${name ? "top-3 text-sm text-[rgba(204,7,30,1)]" : "text-lg text-gray-400"} 
                                    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                                    peer-focus:top-3 peer-focus:text-sm peer-focus:text-[rgba(204,7,30,1)]`}
                                >
                                    이름 <span className="text-[rgba(204,7,30,1)]">*</span>
                                </label>

                                {errors.name && <p className="pt-2 pl-2 text-small text-red-500">{errors.name.message}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("email")}
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`pt-6 pl-3 pb-1 block w-full h-13 mt-0 bg-ui-bg-field border rounded-md appearance-none
                                    focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base
                                    hover:bg-ui-bg-field-hover peer border-gray-300 outline-none placeholder-transparent
                                    ${email && "focus:ring-2 focus:ring-[rgba(204,7,30,1)]"}`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className={`pointer-events-none absolute left-3 text-gray-500 transition-all top-1/2 transform -translate-y-1/2
                                    ${email ? "top-3 text-sm text-[rgba(204,7,30,1)]" : "text-lg text-gray-400"} 
                                    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                                    peer-focus:top-3 peer-focus:text-sm peer-focus:text-[rgba(204,7,30,1)]`}
                                >
                                    이메일 <span className="text-[rgba(204,7,30,1)]">*</span>
                                </label>

                                {errors.email && <p className="pt-2 pl-2 text-small text-red-500">{errors.email.message}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type={isVisible ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`pt-6 pl-3 pb-1 block w-full h-13 mt-0 bg-ui-bg-field border rounded-md appearance-none
                                    focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base
                                    hover:bg-ui-bg-field-hover peer border-gray-300 outline-none placeholder-transparent
                                    ${password && "focus:ring-2 focus:ring-[rgba(204,7,30,1)]"}`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className={`pointer-events-none absolute left-3 text-gray-500 transition-all  top-1/2 transform -translate-y-1/2
                                    ${password ? "top-3 text-sm text-[rgba(204,7,30,1)]" : "text-lg text-gray-400"} 
                                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                                    peer-focus:top-3 peer-focus:text-sm peer-focus:text-[rgba(204,7,30,1)]`}
                                >
                                    비밀번호 <span className="text-[rgba(204,7,30,1)]">*</span>
                                </label>
                                <Password isVisible={isVisible} onToggle={() => setIsVisible((prev) => !prev)} />
                            </div>

                            <small className="block text-right">
                                이미 회원이신가요?
                                <Link to="/login" className="ml-1 underline underline-offset-3 text-[rgba(204,7,30,1)]">
                                    로그인
                                </Link>
                            </small>

                            <button type="submit" className="bg-[rgba(204,7,30,.8)] hover:bg-[rgba(204,7,30,1)] text-white rounded-lg transition-all p-2 w-full">
                                회원가입
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;
