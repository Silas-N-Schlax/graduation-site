---
category: "Programming"
page_title: "Truth Tables Program"
layout: "paper"
title: "Truth Tables Program"
student: "Schlax, Silas"
class: "Self taught"
instructor: "Silas Schlax, Instructor & Student"
date_sub: "October 16, 2023"
file: "../../assets/files/Ruby/truth_table.zip"
button_text: "Download my Program!"
---

I know this program is poorly coded, but it was the first project I coded in Ruby within the first couple weeks, so I didn't even know that classes, and lot of useful functions existed! That said it does work, so if you want to try it, download the .zip at the bottom of the page and run it! Here is a simple guide to run it, you will need some technical knowledge of this subject as I will only give a brief overview. First you need to install version `3.2.2` (Note that later versions may work, but this is the version that it was last tested on). You will also quickly find out that Ruby is MacOS native, now there is a Windows 11 port that works well its just harder to set up then say node, or python. Finally unzip the folder, and CD to it in your terminal. Run the command `ruby truth_table.rb` to start the file, then follow the prompts! Happy testing!

```javascript

truth_table_p = [1, 1, 0, 0]
truth_table_q = [1, 0, 1, 0]
truth_table_column_3 = []
truth_table_column_3_final = []
truth_table_column_4_first = []
truth_table_column_4_secend = []
truth_table_column_4_final = []
all_table_evalutated = []
column_3 = ""
column_4 = ""

def get_truth_table_values(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    if have_read.downcase == "yes"
        def get_column_3_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
            if column_3.downcase == "p" || column_3.downcase == "!p" || column_3.downcase == "q" || column_3.downcase == "!q"
                def get_colmun_4_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
                    all_of_column_4_have_valid_input = [false, false, false]
                    x = 0
                    until x == 4 do
                        if column_4[x] == "p" || column_4[x] == "!p" || column_4[x] == "q" || column_4[x] == "!q"
                            all_of_column_4_have_valid_input[x] = true
                            x += 1
                        elsif column_4[x] == "and" || column_4[x] == "or"
                            all_of_column_4_have_valid_input[x] = true
                            x += 1
                        elsif all_of_column_4_have_valid_input[0] == true && all_of_column_4_have_valid_input[1] == true && all_of_column_4_have_valid_input[2] == true
                            eval_column_three(column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated)
                            eval_column_4(column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, truth_table_p, truth_table_q)
                            puts "All values are valid."
                            puts "Program Loading...."
                            last_step_to_final_table(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
                            x = 4
                        else
                            puts "Invalid Input, please try again"
                            column_4 = gets.chomp.downcase.split(",")
                            get_colmun_4_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
                        end
                    end
                end
                puts "Column 4: Valid input inclues (p, q, !p, !q, and, or). When you put it in it should like like this: p,and,!q or p,or,!q. and / or should always be in the middle with a comman infront and behind it. You can not do any more than a 2 varible eqation. and = multiplican, and or = addition."
                column_4 = gets.chomp.downcase.split(",")
                get_colmun_4_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
            else
                until column_3.downcase == "p" || column_3.downcase == "!p" || column_3.downcase == "q" || column_3.downcase == "!q" do
                    puts "Invalid Input, please try again"
                    column_3 = gets.chomp.downcase
                end
                get_column_3_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
            end
        end
        puts "Column 3: Valid input includes (p, q, !p, !q), if your table has something differnt p reperesent the first column with the values (1,1,0,0) and q the secend column with the values of (1,0,1,0)."
        column_3 = gets.chomp.downcase
        get_column_3_value(have_read, column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated, column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend)
        return column_3, column_4
    else
        while have_read.downcase != "yes" do
            puts "Have you read the rules?"
            have_read = gets.chomp.downcase
        end
        get_truth_table_values(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    end
end

#? ----- Start of Column 3 -----
def eval_column_three (column_3, truth_table_column_3, truth_table_p, truth_table_q, truth_table_column_3_final, all_table_evalutated)
    i = 0
    if column_3 == "p"
        until i >= 4 do
            truth_table_column_3[i] = truth_table_p[i]
            i += 1
        end
    elsif column_3 == "!p"
        until i >= 4 do
            if truth_table_p[i] == 1
                truth_table_column_3[i] = 0
            else truth_table_p[i] == 0
                truth_table_column_3[i] = 1
            end
            i += 1
        end
    elsif column_3 == "q"
        until i >= 4 do
            truth_table_column_3[i] = truth_table_q[i]
            i += 1
        end
    elsif column_3 == "!q"
        until i >= 4 do
            if truth_table_q[i] == 1
                truth_table_column_3[i] = 0
            else truth_table_q[i] == 0
                truth_table_column_3[i] = 1
            end
            i += 1
        end
    else
        puts "You did not give me valid input for column 3!"
    end
    set_column_3_t_f_values(truth_table_column_3, truth_table_column_3_final, all_table_evalutated)
end

def set_column_3_t_f_values(truth_table_column_3, truth_table_column_3_final, all_table_evalutated)
    i = 0
    until i >= 4 do
        if truth_table_column_3[i] == 1
            truth_table_column_3_final[i] = "T"
        elsif truth_table_column_3[i] == 0
            truth_table_column_3_final[i] = "F"
        else
            puts "I have died."
        end
        i += 1
    end
    all_table_evalutated[0] = "yes"
end
#? ----- End of Column 3 -----


#? ----- Start of Column 4 -----
def eval_column_4(column_4, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, truth_table_p, truth_table_q)
    i = 1
    until i >= 4 do
        if i == 1
            setting_colunm_4_values_first(column_4, truth_table_p, truth_table_q, truth_table_column_4_first, truth_table_column_4_secend)
            i += 1
        elsif i == 2
            setting_colunm_4_values_secend(column_4, truth_table_p, truth_table_q, truth_table_column_4_first, truth_table_column_4_secend)
            i += 1
        elsif i == 3
            if column_4[1] == "and"
                column_4_and_value(truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated)
            elsif column_4[1] == "or"
                column_4_or_value(truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated)
            else
                puts "I have died"
            end
            i += 1
        end
    end
end

def setting_colunm_4_values_first(column_4, truth_table_p, truth_table_q, truth_table_column_4_first, truth_table_column_4_secend)
    i = 0
    if column_4[0] == "p"
        until i >= 4 do
            truth_table_column_4_first[i] = truth_table_p[i]
            i += 1
        end
    elsif column_4[0] == "!p"
        until i >= 4 do
            if truth_table_p[i] == 1
                truth_table_column_4_first[i] = 0
            else truth_table_p[i] == 0
                truth_table_column_4_first[i] = 1
            end
            i += 1
        end
    elsif column_4[0] == "q"
        until i >= 4 do
            truth_table_column_4_first[i] = truth_table_q[i]
            i += 1
        end
    elsif column_4[0] == "!q"
        until i >= 4 do
            if truth_table_q[i] == 1
                truth_table_column_4_first[i] = 0
            else truth_table_q[i] == 0
                truth_table_column_4_first[i] = 1
            end
            i += 1
        end
    else
        puts "You did not give me valid input for the frist value of column 4."
    end
end

def setting_colunm_4_values_secend(column_4, truth_table_p, truth_table_q, truth_table_column_4_first, truth_table_column_4_secend)
    i = 0
    if column_4[2] == "p"
        until i >= 4 do
            truth_table_column_4_secend[i] = truth_table_p[i]
            i += 1
        end
    elsif column_4[2] == "!p"
        until i >= 4 do
            if truth_table_p[i] == 1
                truth_table_column_4_secend[i] = 0
            else truth_table_p[i] == 0
                truth_table_column_4_secend[i] = 1
            end
            i += 1
        end
    elsif column_4[2] == "q"
        until i >= 4 do
            truth_table_column_4_secend[i] = truth_table_q[i]
            i += 1
        end
    elsif column_4[2] == "!q"
        until i >= 4 do
            if truth_table_q[i] == 1
                truth_table_column_4_secend[i] = 0
            else truth_table_q[i] == 0
                truth_table_column_4_secend[i] = 1
            end
            i += 1
        end
    else
        puts "You did not give me valid input for the secend value of column 4."
    end
end

def column_4_and_value(truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated)
    i = 0
    until i >= 4 do
        truth_table_column_4_final[i] = truth_table_column_4_first[i] * truth_table_column_4_secend[i]
        i += 1
    end
    set_column_4_t_f_values(truth_table_column_4_final, all_table_evalutated, truth_table_column_4_first)
end

def column_4_or_value(truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated)
    i = 0
    until i >= 4 do
        truth_table_column_4_final[i] = truth_table_column_4_first[i] + truth_table_column_4_secend[i]
        i += 1
    end
    set_column_4_t_f_values(truth_table_column_4_final, all_table_evalutated, truth_table_column_4_first)
end

def set_column_4_t_f_values(truth_table_column_4_final, all_table_evalutated, truth_table_column_4_first)
    i = 0
    until i >= 4 do
        if truth_table_column_4_final[i] == 1 || truth_table_column_4_final[i] == 2
            truth_table_column_4_first[i] = "T"
        elsif truth_table_column_4_final[i] == 0
            truth_table_column_4_first[i] = "F"
        else
            puts "I have died"
        end
        i += 1
    end
    all_table_evalutated[1] = "yes"
end

def set_column_1_t_f_values(truth_table_p)
    i = 0
    until i >= 4 do
        if truth_table_p[i] == 1
            truth_table_p[i] = "T"
        elsif truth_table_p[i] == 0
            truth_table_p[i] = "F"
        else
            puts "I have died"
        end
        i += 1
    end
end

def set_column_2_t_f_values(truth_table_q)
    i = 0
    until i >= 4 do
        if truth_table_q[i] == 1
            truth_table_q[i] = "T"
        elsif truth_table_q[i] == 0
            truth_table_q[i] = "F"
        else
            puts "died column 2 tf values"
        end
        i += 1
    end
end

def send_truth_table(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    i = 0
    puts "-------------------------"
    puts "|p|q|#{column_3} |#{column_4[0]} #{column_4[1]} #{column_4[2]}|"
    until i >= 4 do
        puts "|#{truth_table_p[i]}|#{truth_table_q[i]}| #{truth_table_column_3_final[i]} |    #{truth_table_column_4_first[i]}   |"
        i += 1
    end
    puts "-------------------------"
    restart_program(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
end

def last_step_to_final_table(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    i = 1
    until i == 2
        if all_table_evalutated[0] == "yes" && all_table_evalutated[1] == "yes"
            set_column_1_t_f_values(truth_table_p)
            set_column_2_t_f_values(truth_table_q)
            send_truth_table(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
        i = 2
        end
    end
end

def restart_program(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    puts "Would you like to restart the program? If so type <yes>."
    restart = gets.chomp.downcase
    if restart == "yes"
        truth_table_p = [1, 1, 0, 0]
        truth_table_q = [1, 0, 1, 0]
        truth_table_column_3 = []
        truth_table_column_3_final = []
        truth_table_column_4_first = []
        truth_table_column_4_secend = []
        truth_table_column_4_final = []
        all_table_evalutated = []
        column_3 = ""
        column_4 = ""
        restart = nil
        get_truth_table_values(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)
    else
        puts "Thank you for using my program, I hope you enjoyed it!"
    end
end

puts "Please read rules before starting!"
puts "----------------------------------"
puts "#1 By using my program you agree to not use it the cheat for any homework, exam, etc... Also if you do use it for these things I am NOT responsible."
puts "#2 You can copy this code as it says in the LICENSE file as this program is protected by the MIT license."
puts "#3 I am not responsible for any harm our program does to anyone, use the program at your own risk."
puts "#4 Have fun, follow the prompts, and most of all don't break my program!"
puts "---------------------------------"
puts "type <yes> to more forword."
have_read = gets.chomp
get_truth_table_values(have_read, truth_table_p, truth_table_q, truth_table_column_3, truth_table_column_3_final, truth_table_column_4_final, truth_table_column_4_first, truth_table_column_4_secend, all_table_evalutated, column_3, column_4)

```

<script src="/assets/js/konamiCode.js"></script>